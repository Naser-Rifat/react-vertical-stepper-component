# React Stepper Component

A highly customizable and reusable **React Stepper** component built with **TypeScript**. This component is ideal for visualizing a multi-step process such as order tracking, onboarding steps, checkout flows, and more.

## Features

- **TypeScript Support**: Fully typed for a better development experience.
- **Customizable**: Modify the appearance, step content, and progress indicators.
- **Responsive Design**: Adapts to different screen sizes seamlessly.
- **Minimal Setup**: Quickly integrate into any React project.

## Installation

Install the package via NPM:

```bash
npm install react-stepper-component
```

```html
import React from 'react'; import { Stepper } from 'react-stepper-component';
const steps = [ { title: 'Order Placed', time: '12:34 PM 12/12/24', name: 'Ms
Siddika Rahman', role: 'Buyer', avatar:
'https://mui.com/static/images/avatar/1.jpg', isActive: true, }, { title:
'Processing', time: '1:00 PM 12/12/24', name: 'Ms Siddika Rahman', role:
'Buyer', avatar: 'https://mui.com/static/images/avatar/1.jpg', isActive: false,
}, { title: 'Shipped', time: '3:00 PM 12/12/24', name: 'Ms Siddika Rahman',
role: 'Buyer', avatar: 'https://mui.com/static/images/avatar/1.jpg', isActive:
false, }, ]; const App = () => (
<div>
  <Stepper steps="{steps}" />
</div>
); export default App;
```

### Step Data Structure

The `Stepper` component accepts an array of steps, with each step containing the following fields:

- **title**: A string representing the title of the step (e.g., "Order Placed").
- **time**: A string representing the timestamp of the step.
- **name**: The name of the user associated with the step.
- **role**: The role of the user (e.g., "Buyer").
- **avatar**: A URL to the user's avatar image.
- **isActive**: A boolean indicating whether the step is the current active step.

### Props

- **steps** (array): An array of step objects that define each step's content and status.

### Example Steps Array

```html
const steps = [ { title: 'Step 1 Title', time: 'Step 1 Time', name: 'Step 1
Name', role: 'Step 1 Role', avatar: 'URL to Step 1 Avatar', isActive: true, //
Indicates active step }, { title: 'Step 2 Title', time: 'Step 2 Time', name:
'Step 2 Name', role: 'Step 2 Role', avatar: 'URL to Step 2 Avatar', isActive:
false, }, // Add more steps as needed ];
```

### Customization

You can easily modify the component's appearance by applying your own CSS classes. The component uses basic Tailwind CSS classes by default, but these can be overridden by wrapping the component in your own styled components or CSS
