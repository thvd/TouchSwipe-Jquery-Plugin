window.jQuery.swipe=jQuery.Z;
(function(q){q.fn.Z=function(l){if(!this)return!1;var n={gb:1,zc:75,Z:k,Bb:k,Cb:k,Db:k,Ab:k,sa:k,click:k,Bc:!0,F:"auto"},V="left",W="right",X="up",ea="down",fa="none",Y="horizontal",H="vertical",ha="auto",la="start",ma="move",J="end",O="cancel",v="start";if(l.F==void 0&&(l.Z!=void 0||l.sa!=void 0))l.F=fa;l&&q.extend(n,l);return this.a(function(){var l,C,Q,M;function oa(c){v=la;j=c.touches.length;distance=0;direction=k;j==n.gb?(Q=l=c.touches[0].pageX,M=C=c.touches[0].pageY,n.sa&&K(c,v)):E()}function aa(c){if(!(v==
J||v==O)){l=c.touches[0].pageX;C=c.touches[0].pageY;direction=ja();j=c.touches.length;v=ma;var q=direction;if(n.F==fa)c.preventDefault();else{var w=n.F==ha;switch(q){case V:(n.Bb&&w||!w&&n.F!=Y)&&c.preventDefault();break;case W:(n.Cb&&w||!w&&n.F!=Y)&&c.preventDefault();break;case X:(n.Db&&w||!w&&n.F!=H)&&c.preventDefault();break;case ea:(n.Ab&&w||!w&&n.F!=H)&&c.preventDefault()}}j==n.gb?(distance=D(),n.sa&&K(c,v),!n.Bc&&distance>=n.zc&&(v=J,K(c,v),E())):(v=O,K(c,v),E())}}function ia(c){c.preventDefault();
distance=D();direction=ja();n.Bc?(v=J,j==n.gb&&l!=0?distance>=n.zc||(v=O):v=O,K(c,v),E()):v==ma&&(v=O,K(c,v),E())}function E(){C=l=M=Q=j=0}function K(c,l){n.sa&&n.sa.call(w,c,l,direction||k,distance||0);l==O&&n.click&&j==1&&(isNaN(distance)||distance==0)&&n.click.call(w,c,c.target);if(l==J)switch(n.Z&&n.Z.call(w,c,direction,distance),direction){case V:n.Bb&&n.Bb.call(w,c,direction,distance);break;case W:n.Cb&&n.Cb.call(w,c,direction,distance);break;case X:n.Db&&n.Db.call(w,c,direction,distance);break;
case ea:n.Ab&&n.Ab.call(w,c,direction,distance)}}function D(){return Math.round(Math.sqrt(Math.pow(l-Q,2)+Math.pow(C-M,2)))}function ja(){var c;c=Math.round(Math.atan2(C-M,Q-l)*180/Math.PI);c<0&&(c=360-Math.abs(c));return c<=45&&c>=0?V:c<=360&&c>=315?V:c>=135&&c<=225?W:c>45&&c<135?ea:X}var w=q(this),j=0;Q=0;M=0;l=0;C=0;try{this.addEventListener("touchstart",oa,!1),this.addEventListener("touchmove",aa,!1),this.addEventListener("touchend",ia,!1),this.addEventListener("touchcancel",E,!1)}catch(c){}})}})(jQuery);
