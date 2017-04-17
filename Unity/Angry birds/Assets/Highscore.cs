using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Highscore : MonoBehaviour
{

    public Text highscoreText;

    void Start()
    {
        highscoreText.text = "Highscore : " + (int) PlayerPrefs.GetFloat("Highscore");
    }

    // Update is called once per frame
   
}
