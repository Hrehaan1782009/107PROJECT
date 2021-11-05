function startClassification(){
    navigator.mediaDevices.getUserMedia({  audio: true});
    classifier = ml5.soundClassifier('', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_person_name").innerHTML = results[0].label;
      document.getElementById("result_person_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
    }