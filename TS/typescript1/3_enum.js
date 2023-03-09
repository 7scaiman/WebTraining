var Membership;
(function (Membership) {
    Membership[Membership["simple"] = 0] = "simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standard;
var membershipReverse = Membership[2];
console.log(membership);
console.log((membershipReverse));
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["FaceBook"] = "FaceBook";
    SocialMedia["Instagram"] = "Instagram";
    SocialMedia["YouTube"] = "YouTube";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.FaceBook;
console.log(social);
