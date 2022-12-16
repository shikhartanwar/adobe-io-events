"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7817],{90115:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return u}});var o=n(87462),a=n(63366),r=(n(15007),n(64983)),i=n(91515),p=["components"],s={},d={_frontmatter:s},l=i.Z;function u(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.mdx)(l,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"jwt-authentication-publicprivate-keys-management"},"JWT Authentication public/private keys management"),(0,r.mdx)("p",null,"To secure the calls between Adobe I/O Events and AEM, we leverage a JWT exchange token flow.\nThis flow requires the JWT request to be signed, and therefore, requires private-public keys configurations\n(see our ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/developer-console/docs/guides/authentication/JWT/"},"JWT authentication flow documentation"),"\nfor more details). This documentation details these configurations steps."),(0,r.mdx)("h2",{id:"create-your-publicprivate-key-pair"},"Create your public/private key pair"),(0,r.mdx)("p",null,"To create an RSA private/public certificate pair, use ",(0,r.mdx)("a",{parentName:"p",href:"https://www.openssl.org/docs/manpages.html"},"openssl"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt\n")),(0,r.mdx)("h2",{id:"upload-your-public-key-in-your-adobe-developer-workspace"},"Upload your public key in your Adobe Developer Workspace"),(0,r.mdx)("p",null,"Upload the public key you generated above (",(0,r.mdx)("inlineCode",{parentName:"p"},"certificate_pub.crt"),") in your Adobe Developer Workspace,\nsee our ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/developer-console/docs/guides/credentials/"},"Adobe Developer Console guide")),(0,r.mdx)("h2",{id:"convert-your-private-key-in-a-simple-base64-encoded-string"},"Convert your private key in a simple base64-encoded String"),(0,r.mdx)("p",null,"First, to convert your private key to a PKCS8 format, use the following command:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"openssl pkcs8 -topk8 -inform PEM -outform DER -in private.key -nocrypt > private.pkcs8.key\n")),(0,r.mdx)("p",null,"Then, to base 64 encode it, use the following command:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"base64 private.pkcs8.key\n")),(0,r.mdx)("p",null,"You will use the resulting (base64 encoded pkcs8 key) string to configure ",(0,r.mdx)("inlineCode",{parentName:"p"},"aem-io-events"),",\nand set its ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio.encoded.pkcs8")," configuration.   "))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-aem-aem-key-setup-md-8e19a151c6e1084261e6.js.map