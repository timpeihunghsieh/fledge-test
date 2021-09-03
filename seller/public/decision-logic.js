function scoreAd(
    adMetadata, bid, auctionConfig, trustedScoringSignals, browserSignals) {
  console.log("trustedScoringSignals:");
  console.log(trustedScoringSignals);
  return bid;
}

function reportResult(auctionConfig, browserSignals) {
  return {
    'success': true,
    'signalsForWinner': {'signalForWinner': 1},
    'reportUrl': 'https://somewhere/test/td/seller/report_url',
    'arbitrary_seller_defined_key': 'arbitrary_seller_defined_val'
  };
}