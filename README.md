# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

🔧 Technologies Used

- Expo Router for navigation.
- React Query for API calls & caching.
- AsyncStorage for local persistence.
- Lodash Debounce for optimized search.
- FlatList with onEndReached for infinite scrolling.

🛠 Project Structure
/infinite-app
├── /components # Reusable UI components (ProductList, SearchBar, etc.)
├── /context # Context API for managing favorites
├── /hooks # Custom hooks (network status, API fetching, etc.)
├── /screens # Main screens (Home, Favorites, etc.)
├── /assets # Images and icons
├── App.tsx # Entry point of the app
├── README.md # Project documentation
├── package.json # Dependencies

🚀 Approach & Optimizations

✅ State Management

- useState & useEffect for local component state.
- Context API to manage and persist favorite products.
  ✅ API Performance
- Debounce prevents excessive API calls when searching.
- Pagination & Caching improve performance.
  ✅ Offline & Error Handling
- useNetInfo to detect connectivity status.
- Retry button when an API request fails.
