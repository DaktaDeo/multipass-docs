# Type
A [Type] is way to add a specific meaning to a Model.
In contrast to a [Label] a [Type] is specific to one type of Model and cannot have children.

## Type vs Label
Even when you think your [Label] will only be used on one type of [Model],
it might be a good idea to use a Label instead of a [Type].
This way you can use the Label to group Models together and the Type to add a specific meaning to a Model.

You can also use a Label and a [Type] at the same time,
and this is actually a good robuust idea to create powerful hierarchies.
Sometimes this way of structuring data will allow for minimal repetition of data.

Remember: you can always change your mind later on!

## FAQ
### What is the difference with a [Label]?
- A [Type] is specific for one type of Model.
- A [Label] can be used on all the different kinds of Models.
- A [Label] can have children, a [Type] cannot.
- You actually can have a [Label] `3D` and a [Type] `3D` at the same time.

### When to use a Type?
- When you do need to create a hierarchy
- When it does not make sense to use the same Type on different kinds of Models. For example: `land line` only makes sense for a [Phone number].



