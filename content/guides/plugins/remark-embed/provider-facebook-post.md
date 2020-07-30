---
title: Provider - Facebook Post
---

## Configuration

| Name          | Type      | Description                                        | Allowed Values  | Default |
| ------------- | --------- | -------------------------------------------------- | --------------- | ------- |
| width         | `integer` | Sets the maximum width for the embed               | `100%`, `400px` | `100%`  |
| omitscript    | `boolean` | Removes the `<script>` part from the response html | `true`, `false` | `true`  |

## External Assets

By default, the plugin does not append or load external assets, you have to add the following resources manually.

This is asset is only required when `omitscript` is set to `true` which is the default value.

```
<script>
(function(d, s, id) { 
	var js, 
	    fjs = d.getElementsByTagName(s)[0]; 
	if (d.getElementById(id)) return; 
	js = d.createElement(s); 
	js.id = id; 
	js.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9";  
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>
```