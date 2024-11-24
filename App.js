// import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/utils/redux/store/store";
import RootNavigator from "./src/component/navigations/RootNavigator/RootNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider style={{ flex: 1 }}>
          <RootNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
