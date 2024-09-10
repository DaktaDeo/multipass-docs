# Webforms
## Introduction to Our Webforms

Our webforms are designed to provide a powerful, flexible solution for collecting structured information within our **Webcontent** models. Whether you’re handling simple or complex data, these forms integrate seamlessly into your workflow.

### Key Features:

- **Simple Embedding with Shortcodes**: You can embed Webforms into any **Webcontent** using a shortcode like `[webform id="1"]`. This allows you to easily insert forms into your content without hassle.

- **Structured Data Collection**: The forms guide users through a clear, structured way of providing information, ensuring that you receive reliable, organized data.

- **Laravel Validation**: Each field can be configured with validation rules, ensuring that users provide accurate data (e.g., making sure an email field contains a valid email address).

- **JSON-Based Form Structure**: Forms are generated from **JSON**, making them easy to set up and customize without needing complex tools. This provides flexibility and control over form design.

- **Advanced Data Mapping**: You can map form data directly to your existing **Contact** and **Person** models. This includes even complex scenarios like creating a **Contact** with two **Person** entries that share the same last name. Our system supports nested data structures, so you can handle complex relationships with ease.

- **Displayname Attribute**: The `displayname` is a special mapper that helps you, as the admin, easily find and manage models (such as **Contacts**) in **Multipass**. This allows you to quickly locate the records you’ve created, just as you’re used to in your current workflow.

- **GDPR-Compliant Storage**: All submitted data is saved in **JSON** format, complete with metadata to ensure compliance with GDPR and other privacy regulations, giving you peace of mind in handling user data securely.

- **Fail-Safe Data Preservation**: Even if the mapping to models like **Person** or **Contact** fails, the raw form data is still saved, ensuring no information is lost. This allows you to troubleshoot and reprocess the data later if necessary.

- **Future Enhancements**: We're working on features like **automatic importing** or **one-click importing**, which will make managing form submissions even easier in the future.

Our webforms combine flexibility, advanced features, and ease of use, making them a powerful tool for collecting and managing data within our **Webcontent** models.

## Webform Shortcode

Our webforms can be embedded directly into **Webcontent** using shortcodes. This provides a flexible way to integrate forms into your pages without the need for complex setup. Below is a guide to using the shortcode with various attributes to control how the form behaves.

### Basic Syntax

The basic shortcode structure for embedding a webform is:

```
[webform id="FORM_ID"]
```

- `id`: (Required) The ID of the form you want to embed.

### Optional Attributes

You can customize the behavior and appearance of the form using the following optional attributes:

- `view-as`: Specifies how the form should be displayed.
  - Options:
    - `"dialog"` (default) - The form will appear in a modal dialog when triggered.
    - `"inline"` - The form will be embedded directly into the page content.

- `button-text`: Customizes the text of the button that triggers the form.
  - Default: `"Open Form"`

- `redirect-after-submit`: Sets the page slug or URL where the user will be redirected after submitting the form.
  - Example: `redirect-after-submit="/thank-you"`

### Examples

#### 1. Basic Form with Default Behavior

```html
[webform id="1"]
```

This will embed a webform with ID `1`, displayed as a dialog with the default button text ("Open Form").

#### 2. Inline Form with Custom Button Text

```html
[webform id="1" view-as="inline" button-text="Submit Your Details"]
```

This shortcode will embed the form directly into the content, with a custom button labeled "Submit Your Details".

#### 3. Form with Redirect After Submit

```html
[webform id="1" redirect-after-submit="/thank-you"]
```

After the form is submitted, the user will be redirected to the "/thank-you" page.

#### 4. Full Example with All Attributes

```html
[webform id="1" view-as="inline" button-text="Sign Up Now" redirect-after-submit="/welcome"]
```

This will embed a form that:
- Appears inline on the page
- Displays a button with the text "Sign Up Now"
- Redirects the user to "/welcome" after form submission

### Notes

- All forms must be embedded within our **Webcontent** models.
- Make sure to use a valid form `id` to link to the correct webform.
- The `redirect-after-submit` can be a relative slug (like `/thank-you`) or an absolute URL (like `https://example.com/thank-you`).

These shortcodes give you the flexibility to embed and configure webforms exactly as you need them, ensuring a smooth user experience and proper data handling.
