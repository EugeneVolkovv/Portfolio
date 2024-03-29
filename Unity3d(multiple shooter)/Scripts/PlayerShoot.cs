﻿
using UnityEngine;
using UnityEngine.Networking;


public class PlayerShoot : NetworkBehaviour {

	public NewBehaviourScript weapon;

	[SerializeField]
	private Camera cam;

	[SerializeField]
	private LayerMask mask;

	void Start () {
		if (cam == null) {
			Debug.LogError ("PlayerShoot: No camera!");
			this.enabled = false;
		}
	}

	void Update () {
		if (Input.GetButtonDown ("Fire1")) {
			Shoot ();
		}
	}

	[Client]
	void Shoot () {
		RaycastHit _hit;
		if (Physics.Raycast (cam.transform.position,cam.transform.forward, out _hit, weapon.range, mask)) {
			if (_hit.collider.tag == "Player")
				CmdPlayerShoot ( _hit.collider.name, weapon.damage );
		}
	}

	[Command]
	void CmdPlayerShoot (string _ID,float damage) {
		Debug.Log ("в игрока " + _ID + " выстрелили");

        Player player = GameManager.GetPlayer(_ID);
        player.TakeDamage(damage);
	}

	}

