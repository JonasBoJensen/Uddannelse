using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class ButtonManager : MonoBehaviour {
    public string newGameLevel;
    public string MainMenu;
    public AudioSource Acknowledged;

    public float newGameTimer = 1f;

    public void NewGameBtn()
    {
        StartCoroutine(newGame());
        
    }

    IEnumerator newGame()
    {
        Acknowledged.Play();
        yield return new WaitForSeconds(newGameTimer);
        
        SceneManager.LoadScene(newGameLevel);
    }
    public void ExitGamerBtn()
    {
        Application.Quit();
    }
    public void MainMenuBtn()
    {
        SceneManager.LoadScene(MainMenu);
    }
    public void RestartBtn()
    {
        Enemy.EnemiesAlive = 0;
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }
}
