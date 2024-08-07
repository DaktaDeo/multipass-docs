# Multipass Flavoured Markdown Guide
## What is Markdown?

Markdown is a text formatting syntax that's easy to use and read. It lets you add styling to plain text, similar to how you might format words in a word processor.

## Basic Formatting

Here's how you can format text in Markdown:

- **Bold**: `**Bold text**` or `__Bold text__`
- *Italic*: `*Italic text*` or `_Italic text_`
- ***Bold and Italic***: `**_Bold and Italic_**` or `__*Bold and Italic*__` or `***Bold and Italic***` or `___Bold and Italic___`

## Lists

Lists in Markdown are a great way to organize information or tasks. They are easy to create and automatically manage new items:

- **Creating a List**: Start a list with `-`, `+`, or a number followed by a period (e.g., `1.`). This turns the line into the first item of your list.
- **Adding New Items**: Simply hit `Enter` after typing an item. Markdown automatically creates a new list item for you.
- **Exiting List Mode**: When you're done with the list, press `Enter` twice. If the last item of your list is empty, Markdown will understand you're finished and will remove the empty list item, neatly concluding the list.

You can create both bullet and numbered lists to structure your content effectively.

### Bullet List:

```markdown
*  item 1
*  item 2
*  item 3
*  item 4
```
Or 
```markdown
-  item 1
-  item 2
-  item 3
-  item 4
```
### Numbered List:

```markdown
1.  item 1
2.  item 2
3.  item 3
4.  item 4
```
here you can actually use this as well:

```markdown
1.  item 1
1.  item 2
1.  item 3
1.  item 4
```

Both will render the same way. 😁

## Task Lists

In addition to regular bullet and numbered lists, we offer a 'task list' feature. This special list type enhances your ability to track tasks or items:

- **Creating a Task List**: Start your list with `- [ ]` to create an unchecked checkbox, like `- [ ] Task 1`.
- **Checkbox Functionality**: In preview mode, these checkboxes are interactive. You can click on them to mark tasks as completed.
- **Automatic Updates**: When you check a box in preview mode, the Markdown code updates and saves automatically. An checked task will look like `- [x] Completed Task`.

Task lists are an effective way to manage to-do items or checklists directly within your Markdown document.

### Task List (checkboxes):

```markdown
- [ ]  item 1
- [ ]  item 2
- [ ]  item 3
- [ ]  item 4
```
Remember to add a space between the brackets and the text. 

Here's how to check a task:

```markdown
- [x]  item 1
- [ ]  item 2
- [ ]  item 3
- [ ]  item 4
```

Or simply click on the checkbox in preview mode to check & save it. 🎉

**Note**: The interactivity and auto-saving features of task lists are specific to the Multipass environment. These features are not active in this documentation file itself. In the documentation, the examples illustrate how the Markdown syntax for task lists appears and functions.

## External Links

External links are used to point to resources on other websites. Here’s how you can add them:

- **Basic External Link**: Use `[Link Text](URL)` syntax. For example, `[Google](https://www.google.com)` creates a link to Google.
- **Title Attribute**: To add a title (tooltip), use `[Link Text](URL "Title")`. For example, `[GitHub](https://github.com "Visit GitHub")`.

## Internal Links (Link Shortcode)

### Introduction

To enhance internal navigation, we've introduced a Custom Link Shortcode, a unique feature in our system that simplifies linking to internal content. This shortcode is specifically designed for our ecosystem, enabling dynamic linking within the markdown content of the applications and websites developed by DaktaDeo.

**Note**: This feature is unique to our system and not part of the standard Markdown specification.

### Features

- **Dynamic Links**: Embed dynamic links in markdown with support for various attributes like `model`, `ID`, `text`, and `slug`. This allows the creation of context-aware, application-specific links.
- **Environment Responsive**: Links are responsive to the environment. For instance, if a model's display name changes, the link automatically updates to reflect this change.
- **Cross-Application Compatibility**: Links are compatible across different DaktaDeo applications. A link that works in the Multipass app will also function correctly on any associated websites.

### Benefits

- **Simplicity and Maintainability**: Streamlines the process of creating internal links, making document maintenance more straightforward.
- **Consistency**: Ensures uniform linking practices across all documentation and systems.
- **Context-Awareness**: Links adapt to changes within the system, reducing the need for manual updates.

### Usage

Internal links with our Custom Link Shortcode are designed for navigating within our documentation or system, as opposed to external links that direct users to other websites. This distinction is crucial for maintaining a seamless and integrated user experience.

Remember, this shortcode method is exclusive to our system and is integral to the interconnected nature of the applications and websites we create for you.

#### Shortcode Syntax
The parser recognizes custom links with the following structure:

```markdown
{link model="modelName" id="identifier" text="displayText" slug="pageSlug"}
```

##### Trigger:
A custom link is triggered by the opening curly brace and the word link, exactly as shown:`{link`

##### Attributes:
- `model` (required): Specifies the type of model the link refers to. Must be enclosed in single or double quotes. This attribute is always in lowercase.
- `id` (required): A unique identifier for the link, which can be numeric or alphanumeric. Numeric identifiers don't require quotes. This attribute is always in lowercase.
- `text` (optional): The display text for the link. Must be enclosed in single or double quotes. This attribute is always in lowercase.
- `slug` (optional): A slug representing a more readable or SEO-friendly identifier. Must be enclosed in single or double quotes. This attribute is always in lowercase.

### Usage Examples
1. Basic link with model and ID:

```markdown
{link model="contact" id="1"}
```
2. Link with model, ID, and display text:

```markdown
{link model="product" id="123" text="View Product"}
```
3. Full link with all attributes, overriding the default text & slug:

```markdown
{link model="user" id="2" text="Timelord" slug="the-doctor"}
```

4. Link with attributes in a different order:

```markdown
{link id:45 model:"blog" text:"Read Article" slug:"tech-trends"}
```

### Notes
- The order of attributes is flexible; they can be specified in any sequence.
- All attributes except id must be enclosed in single or double quotes.
- The id attribute can be unquoted if it's numeric.
- Ensure that the attribute values do not contain the same quote type used to enclose them.
- The order of attributes does not matter and can be arranged in any desired sequence.
- Consistency is key: ensure all attributes are in lowercase.
- Enclose attribute values in single or double quotes.
- Prevent the use of identical quote types within the attribute values as those enclosing them.
- Utilize this custom link syntax to enhance your markdown content with dynamically generated links specific to your application’s needs.


### Previewing Links

When viewing your markdown in preview mode, all links, both external and internal, can be clicked to ensure they lead to the correct destination. This feature helps in verifying the accuracy and functionality of the links you've included.

## External Images
To display images hosted on external websites, you can use the following syntax:

**Adding Basic External Images**:

To add an external image, utilize the syntax `![Alt Text](Image URL)`. For instance, `![Multipass Logo](https://multipass.app/assets/images/logo.png)` will display the Multipass logo.

However, it's important to note that these images are not responsive and are directly pulled from the external source. This method doesn't ensure the safety or reliability of the image, as it depends entirely on the external host. For example, using this syntax:

`![Multipass Logo](https://beta.multipass.rocks/img/color-logo.png)`

will display the logo as follows, with the mentioned limitations:

![Multipass Logo](https://beta.multipass.rocks/img/color-logo.png)

## Internal Media (Media Shortcode)

### Introduction

In our system, the Media Shortcode is a powerful feature designed to streamline the embedding of various media types in markdown content. This specialized shortcode is tailored for the DaktaDeo ecosystem, enhancing the integration of media resources in our applications and websites.

**Note**: This shortcode is a proprietary extension and is not part of the standard Markdown specification.

### Features

- **Versatile Media Embedding**: Allows embedding different media types (like images, videos) with support for attributes such as `id`, `height`, `classes`, and `slug`.
- **Responsive and Adaptive**: The media embeds are responsive, adapting to different display environments and device sizes.
- **Customization**: Offers customization options through attributes, enabling tailored presentations of media elements.

### Benefits

- **User-Friendly**: Simplifies the process of adding media to markdown documents, making it more accessible for users without requiring deep technical knowledge.
- **Consistency Across Platforms**: Ensures a uniform approach to media embedding across all documentation and systems within the DaktaDeo ecosystem.
- **Flexibility**: Provides the flexibility to customize media appearances, aligning with specific design and layout requirements.

### Usage

The Media Shortcode is designed for embedding media within our documentation or system. It differentiates from standard markdown image or video syntax by providing enhanced control and integration specific to our system's capabilities.

#### Syntax

The basic structure of the Media Shortcode is:

```markdown
{media id="uniqueidentifier" height="displayheight" classes="cssclasses" slug="mediaslug" caption="caption for the image"}
```

#### Parameters

- `id` (required): Unique identifier for the media item. This attribute is always in lowercase.
- `height` (optional): Specifies the display height of the media. Defaults to auto-adjusted if not specified. This attribute is always in lowercase.
- `classes` (optional): Custom CSS classes for additional styling. This attribute is always in lowercase.
- `slug` (optional): A readable or SEO-friendly identifier for the media. This attribute is always in lowercase.
- `caption` (optional): A caption to describe the media content. This attribute is always in lowercase.

#### Notes
- The order of attributes is irrelevant; they can be specified in any sequence.
- All attributes must be in lowercase to ensure consistency and prevent errors.
- Attribute values should be enclosed in single or double quotes.
- Avoid using the same type of quotes within the attribute values as those used to enclose them.
- An image will be wrapped inside a `<figure>` tag with a `<figcaption>` tag for the caption.
- Every media item is wrapped inside a `<div>` tag with the class `inline-media-container` for styling purposes. Even the images

### Examples
1. Embedding an image with an identifier:

```markdown
{media id="123"}
```

2. Embedding an image with height and custom classes:

```markdown
{media id="456" height="300px" classes="custom-class-1 custom-class-2"}
```

### Conclusion
Remember, the Media Shortcode enhances the way media is embedded and presented in our system. It's part of our commitment to delivering a more integrated and user-friendly experience across all DaktaDeo applications and websites. Use the caption to add context to your media content and ensure a more engaging and informative presentation.

## Tables

Create tables for structured data:

```markdown
| header | header |
| ------ | ------ |
| cell | cell |
| cell | cell | 
```
For HTML table to Markdown conversion, xls or other cool table tricks? Check out [TableConvert](https://tableconvert.com/html-to-markdown).

