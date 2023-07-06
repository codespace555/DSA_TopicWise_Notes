## Q.1 What’s Box Model in CSS ? 
The CSS box model is a container that contains multiple properties including borders, margins, padding, and the content itself. It is used to create the design and layout of web pages. It can be used as a toolkit for customizing the layout of different elements. The web browser renders every element as a rectangular box according to the CSS box model. 
* **content:** This contains the actual data in the form of text, images, or other media forms and it can be sized using the width & height property.
* **padding:** This property is used to create space around the element, inside any defined border.
* **border:** This property is used to cover the content & any padding, & also allows setting the style, color, and width of the border.
margin: This property is used to create space around the element ie., around the border area.

## Q.2 What are the Different Types of Selectors in CSS & what are the advantages of them?
* **Type Selector:** Selects elements based on their HTML tag name. It allows you to target specific HTML elements and apply styles universally.

* **Class Selector:** Selects elements based on their class attribute. It enables you to group and style multiple elements that share the same class, providing consistent styling across your website.

* **ID Selector:** Selects a single element based on its unique ID attribute. It allows you to target and style a specific element with a unique ID.

* **Attribute Selector:** Selects elements based on their attribute values. It provides flexibility in selecting elements based on their attributes, allowing you to target specific elements based on their unique attribute values.

* **Pseudo-class Selector:** Selects elements based on a specific state or condition. It allows you to style elements based on user interactions or specific states, such as hovering, focusing, or visited links.

* **Descendant Selector:** Selects elements that are descendants of another element. It helps target specific elements within a hierarchy or structure, allowing for more precise styling.

These selectors provide a powerful and flexible way to target and style specific elements on a web page, allowing for customized and selective styling based on various criteria.

## Q.3 What is VW/VH ?


Viewport Width and Viewport Height are units of measurement in CSS that are relative to the size of the viewport, which is the visible area of a web page.These units are particularly useful in creating responsive designs, as they adapt automatically to different screen sizes. By using VW and VH, you can make elements or layouts proportionally responsive to the size of the viewport, providing consistent experiences across various devices.

## Q.4 Whats difference between Inline, Inline Block and block ?

 * **Inline elements** are elements that are displayed on the same line as the text. They are typically used for things like links, images, and emoji.

 * **Inline-block** elements are elements that are displayed on the same line as the text, but they have their own width and height. They are typically used for things like buttons and input fields.

* **Block elements** are elements that are displayed on their own line. They are typically used for things like paragraphs, lists, and tables

## Q.5 How is Border-box different from Content Box?
The border-box model is a CSS box model that defines the width and height of an element as the width and height of its content, plus the width and height of its borders and padding. This is in contrast to the content-box model, which defines the width and height of an element as the width and height of its content, plus the width of its padding.In addition, the border-box model can make it easier to align elements with each other. For example, if you want to align two elements side by side, you can simply set their widths to the same value. With the content-box model, you would need to take into account the width of the elements' borders and padding when calculating their widths

## Q.6 What’s z-index and How does it Function ?

The z-index property in CSS is used to control the stacking order of elements on a web page. Elements with a higher z-index value will be displayed on top of elements with a lower z-index value.

## Q.7 What’s Grid & Flex and difference between them?

Grid and Flexbox are both layout systems that allow you to control the positioning and sizing of elements on a web page. However, there are some key differences between the two systems.

* **Grid:** Grid is a two-dimensional layout system, which means that you can control the position and size of elements both horizontally and vertically. Flexbox, on the other hand, is a one-dimensional layout system, which means that you can only control the position and size of elements horizontally.
* **Flexbox:** Flexbox is more flexible than Grid. This is because Flexbox allows you to control the order of elements, whereas Grid does not. Flexbox also allows you to control the alignment of elements, whereas Grid does not.
 Grid is more powerful than Flexbox. This is because Grid allows you to create more complex layouts than Flexbox. For example, you can use Grid to create layouts with multiple columns and rows, whereas Flexbox can only create layouts with a single column or row.

## Q.8 Difference between absolute and relative and sticky and fixed position explain with example.


**Absolute**

The absolute position is a position that is relative to the nearest positioned ancestor. If there is no positioned ancestor, the absolute position is relative to the viewport.

**Relative**

The relative position is a position that is relative to the element's normal position.

**Sticky**

The sticky position is a position that is relative to the viewport until it reaches a certain point, then it becomes fixed.

**Fixed**

The fixed position is a position that is fixed to the viewport.

Here is an example of the four positions: