import { combineReducers, configureStore } from "@reduxjs/toolkit";
import BannerSlice from "../Slice/BannerSlice";
import CategorySlice from "../Slice/CategorySlice";
import OfferSlice from "../Slice/OfferSlice";
import FeaturedSlice from "../Slice/FeaturedSlice";
import DealSlice from "../Slice/DealSlice";
import PopularSlice from "../Slice/PopularSlice";
import ElectronicSlice from "../Slice/ElectronicSlice";
import DiscoverProductSlice from "../Slice/DiscoverProductSlice";
import CartSlice from "../Slice/CartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import SearchSlice from "../Slice/SearchSlice";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // Add other configuration options if needed
};

const rootReducer = combineReducers({
    Banner: BannerSlice,
    Category: CategorySlice,
    offer: OfferSlice,
    featured: FeaturedSlice,
    deal: DealSlice,
    popular: PopularSlice,
    electronic: ElectronicSlice,
    Discover: DiscoverProductSlice,
    cart: CartSlice,
    search: SearchSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
export { store, persistor };
