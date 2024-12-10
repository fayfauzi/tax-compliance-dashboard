# Tax Compliance Dashboard 

A web application to check tax compliance based on user input, including income, expenses, and tax type. The dashboard allows users to track their tax filings, check compliance, and view submission deadlines.

## Features

- **Income and Expense Input**: 
  - Users can enter their income and expenses, which are formatted with a comma separator for better readability.
  
- **Tax Type Selection**: 
  - Allows users to choose from different tax types, including Income Tax, Corporate Tax, and VAT.
  
- **Form Submission**: 
  - On form submission, the application displays the entered form values in a more user-friendly format.
  
- **Tax Filing Table**: 
  - Displays filing information such as filing type, deadline, and status in a table format with sorting and styling.
  
- **Tax Comparison Bar Chart**: 
  - A bar chart that compares tax assessments for 2024 and 2025, broken down by quarters.
  - Helps users visualize the difference in tax amounts over time, with interactive controls to filter by tax type.
  - The bar chart displays 2024 and 2025 data in different colors (e.g., blue for 2024 and green for 2025).
  - The x-axis represents quarters, and the y-axis shows the tax amounts.
  - This visual comparison helps users track tax assessments and deadlines over different periods.
  
- **Material Design UI**: 
  - The application uses Angular Material components for a responsive, modern design.

## Technologies Used

- **Angular**: Front-end framework used to build the app.
- **ng2-charts**: Used for rendering interactive and animated charts, including the bar chart for tax comparison.
- **Chart.js**: Library for creating the bar chart.
- **Angular Material**: UI components for a clean, responsive layout.
- **TypeScript**: Type-safe JavaScript for better maintainability.
- **Reactive Forms**: For handling form inputs and validation.
- **CSS/SCSS**: For styling the application.

## File Structure

```plaintext
src/
  ├── app/
  │   ├── components/
  │   │   ├── compliance-checker/
  │   │   ├── tax-filings/
  │   │   └── dashboard/
  │   ├── services/
  │   ├── app.module.ts
  │   ├── app.component.ts
  │   └── app.config.ts
  └── assets/
      └── styles/
          └── styles.scss
```

## Future Enhancements

- **API Integration**: The application can be enhanced by connecting to an external API to fetch live tax filing statuses.
- **Form Validation**: Additional validation for the form inputs, such as ensuring that income and expenses are non-negative and not empty.
- **User Authentication**: Add user authentication to track individual users' tax filings and compliance status.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

