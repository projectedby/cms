<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'projectedby' );

/** Database username */
define( 'DB_USER', 'novemberizing' );

/** Database password */
define( 'DB_PASSWORD', 'melong@17' );

/** Database hostname */
define( 'DB_HOST', 'host.docker.internal' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '|A*m6=wa[;f?|^XpSjMXOw9/CTYX.4-cv(7@&Mg]Q3wq$6rT+}a~f.E<A=RoxzSu' );
define( 'SECURE_AUTH_KEY',  '[s&;9BvBJ^P:I8bRRGSK}^KBIvG}1efgnzrcysC#m+!Twbw@y(T16Cc% Y]x!:t@' );
define( 'LOGGED_IN_KEY',    '3SW$F~<2?>z19-L5UVy-3ra~qo> 4br4fO|&kQ&R_f-X=1|09C87>S.}YIjWq3Z!' );
define( 'NONCE_KEY',        ':YX c8;&~HWJWOCy(o_yb$eMQt|mVv*2XSHQJK=>jEw4DLwX*k;w!Br.QiGnRFkd' );
define( 'AUTH_SALT',        'etb`I{: |k@v3bP#iyB6`oJ.iIA5 s=IW<,#;%eh:vZz++C{kWM!dcoql^bpQxmd' );
define( 'SECURE_AUTH_SALT', 'yv@{[bnTlu6]P>C?th!)pY6B6ib.F`0Z=aW!&F|?V&#g/n3Q.gw%5xvp*Nqj^)|M' );
define( 'LOGGED_IN_SALT',   'M;ICJO-hG{kqK4V5XdJ#Xp22RAYG4Pf9sI==P)Kl;eq~]XF4BMYPUv[F)hu@%q+/' );
define( 'NONCE_SALT',       'L;KPI@>?&z//erbWul<!So2$`1*j[ID>pWhB7_=(K$}4l;(f RcB0m.ad&&,YT@e' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
