import { ApiConstants } from '../../common/constants';
import { NetworkClient } from '../network';

export class CoinGeckoApi {
    private static instance?: CoinGeckoApi;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new CoinGeckoApi();
        }
        return this.instance;
    }

    /**
     * 
     * @param coinId Id of the coin eg:bitcoin
     * @param selectedRange range of the data (1,7,30,365,max)
     */
    public createUser = (coinId: String, selectedRange: String) => {
        NetworkClient.getInstance()
            .get(`${ApiConstants.COINGECKO_COINS}${coinId}/market_chart?vs_currency=usd&days=${selectedRange}&interval=hourly`);
    };
}
