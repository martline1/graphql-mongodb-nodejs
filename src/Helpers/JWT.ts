namespace JWT {
	export enum Reason {
		/** Used for login into the application */
		AUTH = "AUTH",

		/** Used to handle password recovery */
		PASSWORD_RECOVERY = "PASSWORD_RECOVERY",

		/** Used to handle password recovery */
		PASSWORD_RECOVERY_VERIFIED = "PASSWORD_RECOVERY_VERIFIED",

		/** Used to just identify a valid token, without auth access */
		IDENTIFY = "IDENTIFY",

		/** For google sign in */
		SOCIAL = "SOCIAL",
	}

	export interface Decoded {
		reason: Reason;
		data: Record<string, string>;
	}
}

export default JWT;
