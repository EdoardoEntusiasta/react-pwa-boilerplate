import { EffectCallback, useEffect } from 'react';

// eslint-disable-next-line
const useMount = (effect: EffectCallback) => useEffect(effect, []);

export default useMount;
