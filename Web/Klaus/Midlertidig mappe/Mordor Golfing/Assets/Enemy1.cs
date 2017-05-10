using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Enemy1 : MonoBehaviour {

    private const float SPEED = 3f;
    private Vector3 direction;

    // Use this for initialization
    void Start () {
        direction = (new Vector3(0.0f, 1.0f, 0.0f)).normalized;
    }
    void OnCollisionEnter2D(Collision2D other)
    {
        if (other.gameObject.tag == "Wall")
        {
            direction *= -1;
        }
    }
    void Update()
    {
        transform.position += direction * SPEED * Time.deltaTime;
    }
    // Update is called once per frame
  
}