import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactrotronReduxSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.11.9' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactrotronReduxSaga())
    .connect();

  console.tron = tron;
}
