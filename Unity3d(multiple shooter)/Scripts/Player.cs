
using UnityEngine;
using UnityEngine.Networking;

public class Player : NetworkBehaviour {
    [SerializeField]
    private float maxHealth = 100f;

    [SyncVar]
    private float currHealth;

    void Awake(){
        currHealth = maxHealth;
    }

    public void TakeDamage (float damage){
        currHealth -= damage;

        Debug.Log(transform.name + "имеет уровень здоровья" + currHealth);
    }
}
