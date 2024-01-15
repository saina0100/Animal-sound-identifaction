function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/I4lwRSLoW/model.json', modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}
var dog=0;
var cat=0;
var tiger=0;
var owl=0;

function gotResults(error, results){
    if(error)
    {
    console.error(error);
} else {
    console.log(results);
    random_number_r=Math.floor(Math.random() *255)+1;
    random_number_g=Math.floor(Math.random() *255)+1;
    random_number_b=Math.floor(Math.random() *255)+1;
    document.getElementById("result_label").innerHTML='Detected voice of- '+results[0].label;
    document.getElementById("result_count").innerHTML='Detected dog-'+dog+'detected cat-'+cat+'detected tiger-'+tiger+'detected owl-'+owl;
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    img=document.getElementById('animal_image');
    
    if (results[0].label=="Barking"){
        img.src='doggy.jpg';
       dog=dog+1;
    }
    else if (results[0].label=="Meowing"){
        img.src='kitty.png';
       cat=cat+1;
    }
    else if (results[0].label=="Roar"){
        img.src='tiger.jpg';
       tiger=tiger+1;
    }
    else if (results[0].label=="hoot"){
        img.src='owl.jpg';
       owl=owl+1;
    }
else{img.src='ear.jpg';}
}
}