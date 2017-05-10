using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Ball : MonoBehaviour {

	public Rigidbody2D rb;
	public Rigidbody2D hook;

	public float releaseTime = .15f;
	public float maxDragDistance = 2f;

	public GameObject hook1;
	public GameObject hookspring;

	private bool isPressed = false;

	public AudioClip EnemyHit;
	public AudioClip GameWon;

    void Update ()
	{
		
		if (isPressed)
		{
			Vector2 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);

			if (Vector3.Distance (mousePos, hook.position) > maxDragDistance) {
				rb.position = hook.position + (mousePos - hook.position).normalized * maxDragDistance;
			} else {
				rb.position = mousePos;
			}
		}
	}
    private void OnCollisionEnter2D(Collision2D other)
    {
        if (other.gameObject.tag == "Respawn")
        {
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        }
		if (other.gameObject.tag == "Enemy") 
		{
			SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
		}
    }

    void OnMouseDown ()
	{
		isPressed = true;
		rb.isKinematic = true;
	}

	void OnMouseUp ()
	{
		isPressed = false;
		rb.isKinematic = false;

		StartCoroutine(Release());
	}

	IEnumerator Release ()
	{
		yield return new WaitForSeconds (releaseTime);

		GetComponent<SpringJoint2D> ().enabled = false;
		this.enabled = false;

		yield return new WaitForSeconds(0.1f);
	
		if (rb.velocity.magnitude < 2) {
			hook1.transform.position = transform.position; 
			GetComponent<SpringJoint2D> ().enabled = true;
			this.enabled = true;
		} else {
			StartCoroutine(Release ());
		}
	}
}



