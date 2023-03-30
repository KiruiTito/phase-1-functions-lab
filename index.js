function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else if (distance > 2500) {
      return 'cannot travel that far';
    }
    return fare;
  }
  
