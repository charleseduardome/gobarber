import { container } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/IChacheProvider';

import RedisCacheProvider from '@shared/container/providers/CacheProvider/implementations/RedisCacheProvider';

const providers = {
  redis: RedisCacheProvider,
};

container.registerSingleton<ICacheProvider>('CacheProvider', providers.redis);
