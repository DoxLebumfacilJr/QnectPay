# QnectPay

QnectPay is a mobile application built with **Expo** and **React Native**. It features authentication, QR code scanning, and tab-based navigation.

---

## Features

- **Authentication**: Sign In and Sign Up screens with form validation.
- **QR Code Scanner**: Scan QR codes with a custom overlay.
- **Tab Navigation**: Navigate between Home, Inbox, Scanner, and Profile tabs.
- **Responsive Styling**: Tailwind CSS with NativeWind for consistent styling.

---

## Project Structure

- **`app/`**: Main application code.
  - **`(auth)/`**: Authentication screens.
  - **`(tabs)/`**: Tab-based navigation screens.
  - **`scanner/`**: QR code scanner implementation.
- **`components/`**: Reusable UI components like `CustomButton` and `FormField`.
- **`constants/`**: Static assets like icons and images.
- **`assets/`**: Fonts, icons, and images.
- **`android/`**: Android-specific configuration files.

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd QnectPay
   ```
2. **Clone the Repository**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npx expo start
   ```
4. **Run on a Device or Emulator**:
   - Use the QR code in the terminal to open the app in Expo Go.
   - Or, run the app on an Android emulator or iOS simulator:
   ```bash
    npm run android
    npm run ios
   ```

## Key Files

- app/\_layout.tsx: Root layout for the app.
- app/(auth)/sign-in.tsx: Sign In screen.
- app/(auth)/sign-up.tsx: Sign Up screen.
- app/(tabs)/\_layout.tsx: Tab navigation layout.
- app/scanner/index.tsx: QR code scanner implementation.
- components/FormField.tsx: Reusable input field.
- components/CustomButton.tsx: Reusable button.

## Dependencies

- Expo: Framework for building React Native apps.
- NativeWind: Tailwind CSS for React Native.
- React Navigation: For navigation and routing.
- Expo Camera: For QR code scanning.

## License

This project is licensed under the MIT License.

Save this content into your [README.md](http://_vscodecontentref_/1) file. Let me know if you need further assistance!
