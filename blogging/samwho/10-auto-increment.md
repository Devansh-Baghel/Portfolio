# Practical Problems with Auto-Increment

2023-03-25
Source: https://samwho.dev/blog/practical-problems-with-auto-increment/

---

In this post I'm going to demonstrate 2 reasons I will be avoiding auto-increment fields in Postgres and MySQL in future. I'm going to prefer using UUID fields unless I have a *very* good reason not to.

## MySQL <8.0 auto-increment ID re-use

If you're running an older version of MySQL, it's possible for auto-incrementing IDs to get re-used.

We start a Docker container of MySQL 5.7 running, attached to a volume that will persist the data between runs. We create a simple table with an auto-increment ID, insert a few rows, and everything looks fine.

Let's delete a row and insert a new one. The ID increments as expected — no re-use. But here's where it gets interesting: we delete that latest row, restart the server, and then insert a new row.

Eep. MySQL has re-used the ID. This is because the way that auto-increment works in InnoDB is, on server restart, it will figure out what the next ID to use is by effectively running:

```sql
SELECT MAX(ID) FROM my_table;
```

If you had deleted the most recent records from the table just before restart, IDs that had been used will be re-used when the server comes back up.

In theory, this *shouldn't* cause you trouble. Best practice dictates that you shouldn't be using IDs from database tables outside of that table unless it's some foreign key field, and you certainly wouldn't leak that ID out of your system, right?

In practice, this stuff happens and can cause devastatingly subtle bugs. MySQL 8.0 changed this behaviour by storing the auto-increment value on disk in a way that persists across restarts.

## Postgres sequence values don't get replicated

Like MySQL 8.0, Postgres stores auto-increment values on disk. It does this in a schema object called a "sequence." When you create an auto-incrementing field in Postgres, behind the scenes a sequence will be created to back that field and durably keep track of what the next value should be.

We create a table, insert a few rows, and take a look at the table schema. The default value for our `id` field is the `nextval` of `my_table_id_seq`. We have a bonafide object in Postgres that's keeping track of the auto-incrementing ID value. If we delete some rows and restart, we wouldn't have the same problem here — `my_table_id_seq` is saved to disk and doesn't lose its place.

Or does it?

If you want to update Postgres to a new major version, the way you typically accomplish that is by creating a new Postgres instance on the version you want to upgrade to, logically replicate from the old instance to the new one, and then switch your application to talk to the new one.

We set up logical replication between Postgres 14 and Postgres 15. Data syncs between old and new instances. So what's the problem?

The sequence value is not replicated. If we tried to insert a row into the new Postgres 15 instance, we'd get a duplicate key error — it tried to insert an ID that already existed.

This can make major Postgres version updates very tricky if you rely heavily on auto-incrementing ID fields. You need to modify the sequence values manually to values you know for a fact won't be reached during the process of the upgrade, and then you likely need to disable writes during the upgrade depending on your workload.

## Conclusion

You can avoid all of the above pain by using UUID fields instead of auto-incrementing integers. These have the benefit of being unpredictable and not leak information about the cardinality of the underlying table if you do end up using them outside of the table (which you shouldn't).

Thanks to this article from the wonderful folks at Incident.io, I am now aware of the German tank problem. Well worth reading both the linked article, and the Wikipedia page, for more reasons not to use auto-increment ID fields.
