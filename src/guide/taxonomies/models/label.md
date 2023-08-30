# Labels

A Label is a way to group different kinds of [Models] together.
In Multipass a [Label] can be used on all the different kinds of Models.
They can be nested to create a hierarchy that works for your [Team].

**Labels are used to group Models together.**

For example we at DaktaDeo have a label `3D`.
We use this label on all the different kinds of Models that are related to `3D printing`. This means that we can tag [Contacts] with it to find those related to that side of the business, but also use the same Label to tag our [Products], [Invoices], [Media], ..

## Label vs Type
Even when you think your [Label] will only be used on one type of [Model],
it might be a good idea to use a Label instead of a [Type].
This way you can use the Label to group Models together and the Type to add a specific meaning to a Model.

You can also use a Label and a [Type] at the same time,
and this is actually a good robuust idea to create powerful hierarchies.
Sometimes this way of structuring data will allow for minimal repetition of data.

Remember: you can always change your mind later on!

## FAQ
### What is the difference with a [Type]?
- A [Type] is specific for one type of Model.
- A [Label] can be used on all the different kinds of Models.
- A [Label] can have children, a [Type] cannot.
- You actually can have a [Label] `3D` and a [Type] `3D` at the same time.

### When to use a Label?
- When you want to group different kinds of Models together
- When you want to create a hierarchy
- If it makes sense to use the same Label on different kinds of Models. For example: `3D` can be used on [Contacts], [Products], [Invoices], [Media], .. but `land line` only makes sense for a [Phone number].


