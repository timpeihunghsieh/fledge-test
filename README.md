# Usage

1. Visit advertiser's page to join interest group.
    - https://fledge-buyer-test.ue.r.appspot.com

2. Visit publisher's page to run an ad auction to see ad.
    - https://fledge-seller-test.ue.r.appspot.com
    
# Implementation
## Publisher Endpoints
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
    
## Advertiser Endpoints
- Homepage
    - https://fledge-buyer-test.ue.r.appspot.com
    - Calls joinAdInterestGroup
- Bidding Logic URL
    - https://fledge-buyer-test.ue.r.appspot.com/bidding-logic.js
    - Will return buyer's generateBid() function and reportWin() function
- Trusted Scoring Signal URL
    - https://fledge-buyer-test.ue.r.appspot.com/trusted-bidding-signals
    - Will return a JSON that represent Trusted Bidding Signals.
- Report Result URL
    - https://fledge-buyer-test.ue.r.appspot.com/report-win
    - Intended to be called by buyer's reportWin().
