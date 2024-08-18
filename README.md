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

import React from 'react';
import { Stepper } from 'react-stepper-component';

const steps = [
  {
    title: 'Order Placed',
    time: '12:34 PM 12/12/24',
    name: 'Ms Siddika Rahman',
    role: 'Buyer',
    avatar: 'https://mui.com/static/images/avatar/1.jpg',
    isActive: true,
  },
  {
    title: 'Processing',
    time: '1:00 PM 12/12/24',
    name: 'Ms Siddika Rahman',
    role: 'Buyer',
    avatar: 'https://mui.com/static/images/avatar/1.jpg',
    isActive: false,
  },
  {
    title: 'Shipped',
    time: '3:00 PM 12/12/24',
    name: 'Ms Siddika Rahman',
    role: 'Buyer',
    avatar: 'https://mui.com/static/images/avatar/1.jpg',
    isActive: false,
  },
];

const App = () => (
  <div>
    <Stepper steps={steps} />
  </div>
);

export default App;

```