using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class EnemyScript : MonoBehaviour {

    public GameObject deathEffect;
    public GameObject canvasObject;

    public AudioSource tango;

    public string MainMenu;

    public float Health = 4f;
    
    public static int EnemiesAlive = 0;

    private float timer = 4f;

    void Start()
    {
        EnemiesAlive++;
    }
	void OnCollisionEnter2D(Collision2D colInfo)
    {
        if (colInfo.relativeVelocity.magnitude > Health)
        {
            Die();
        }
    }

    void Die()
    {
        Instantiate(deathEffect, transform.position, Quaternion.identity);
        EnemiesAlive--;
        
        if (EnemiesAlive <= 0)
        {
            tango.Play();
            canvasObject.SetActive(true);
            StartCoroutine(ReturnToMainMenu());
            gameObject.transform.localScale = new Vector3(0f, 0f, 0f);

        } else{
            Destroy(gameObject);
        }
        
    }

    IEnumerator ReturnToMainMenu()
    {
        yield return new WaitForSeconds(timer);
        SceneManager.LoadScene(MainMenu);
    }
}
