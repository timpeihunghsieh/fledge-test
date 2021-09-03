# Chrome's FLEDGE API Test
Chrome has proposed [FLEDGE API](https://github.com/WICG/turtledove/blob/main/FLEDGE.md) for ad serving. This repository tests out the FLEDGE API in Chrome Canary by building out a test publisher and a test advertiser. 

## Usage

1. Download [Chrome Canary](https://www.google.com/chrome/canary/)
2. Start the Chrome Canary with the flags `--enable-features=FledgeInterestGroupAPI,FledgeInterestGroups`. On Mac, you can do this:
    
```
"/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary" --enable-features=FledgeInterestGroupAPI,FledgeInterestGroups
```

3. Use Chrome Canary to visit advertiser's page to join interest group.
    - https://fledge-buyer-test.ue.r.appspot.com

4. Use Chrome Canary to visit publisher's page to run an ad auction to see ad.
    - https://fledge-seller-test.ue.r.appspot.com
    
## Example Implementation Details
### Publisher Endpoints
- Homepage
    - https://fledge-seller-test.ue.r.appspot.com
    - Contains an adslot that will run a FLEDGE auction.
- Decision Logic URL
    - https://fledge-seller-test.ue.r.appspot.com/decision-logic.js
    - Will return seller's scoreAd() function and reportResult() function
- Trusted Scoring Signal URL
    - https://fledge-seller-test.ue.r.appspot.com/trusted-scoring-signals
    - Will return a JSON that represent Trusted Scoring Signals.
    - Note! FLEDGE API does not seem to call this.
- Report Result URL
    - https://fledge-seller-test.ue.r.appspot.com/report-result
    - Intended to be called by seller's reportResult().
    
### Advertiser Endpoints
- Homepage
    - https://fledge-buyer-test.ue.r.appspot.com
    - Calls joinAdInterestGroup
- Bidding Logic URL
    - https://fledge-buyer-test.ue.r.appspot.com/bidding-logic.js
    - Will return buyer's generateBid() function and reportWin() function
- Trusted Bidding Signal URL
    - https://fledge-buyer-test.ue.r.appspot.com/trusted-bidding-signals
    - Will return a JSON that represent Trusted Bidding Signals.
- Report Result URL
    - https://fledge-buyer-test.ue.r.appspot.com/report-win
    - Intended to be called by buyer's reportWin().

### Additional Notes
- All resources that the FLEDGE API fetches need to return `X-Allow-FLEDGE: true`. For example, Biding Logic, Trusted Bidding Signal, ...

## Credit
- Jeff Kaufman's post: https://www.jefftk.com/p/testing-the-fledge-prototype
