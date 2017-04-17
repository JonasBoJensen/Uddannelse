using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class BallScript : MonoBehaviour {

    public Rigidbody2D rb;
    public Rigidbody2D hook;
    public float releaseTime = 0.15f;
    public float nextBallTimer = 4f;
    public float maxDragDistance = 2f;
    public GameObject nextBall;
    public AudioSource Attack;
    
    private bool isPressed = false;

    
    void Update()
    {
        if (isPressed)
        {
            Vector2 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);

            if (Vector3.Distance(mousePos, hook.position) > maxDragDistance)
                rb.position = hook.position + (mousePos - hook.position).normalized * maxDragDistance;
            else
                rb.position = mousePos;
        }
    }

	void OnMouseDown()
    {
        isPressed = true;
        rb.isKinematic = true;
    }

    void OnMouseUp()
    {
        isPressed = false;
        rb.isKinematic = false;
        Attack.Play();
        StartCoroutine(Release());
    }

    IEnumerator Release()
    {
        yield return new WaitForSeconds(releaseTime);

        GetComponent<SpringJoint2D>().enabled = false;

        yield return new WaitForSeconds(nextBallTimer);

        if (nextBall != null)
        {
            nextBall.SetActive(true);
        } 
        
    }
}
