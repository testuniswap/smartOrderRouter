import { Token } from '@myunidavid/sdk-core';
import { log } from '../../util';
import { ProviderConfig } from '../provider';
import { IV3SubgraphProvider, V3SubgraphPool } from './subgraph-provider';

/**
 * Provider for getting V3 subgraph pools that falls back to a different provider
 * in the event of failure.
 *
 * @export
 * @class V3SubgraphProviderWithFallBacks
 */
export class V3SubgraphProviderWithFallBacks implements IV3SubgraphProvider {
  constructor(private fallbacks: IV3SubgraphProvider[]) {}

  public async getPools(
    tokenIn?: Token,
    tokenOut?: Token,
    providerConfig?: ProviderConfig
  ): Promise<V3SubgraphPool[]> {
    // console.log(this.fallbacks);
    for (let i = 0; i < this.fallbacks.length; i++) {
      const provider = this.fallbacks[i]!;
      try {
        const pools = await provider.getPools(
          tokenIn,
          tokenOut,
          providerConfig
        );
        // console.log('v3-pools', pools.length);
        return pools;
      } catch (err) {
        console.log(err);
        log.info(`Failed to get subgraph pools for V3 from fallback #${i}`);
      }
    }

    throw new Error('Failed to get subgraph pools from any providers');
  }
}
