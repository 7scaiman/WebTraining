enum Membership {
    simple,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]
console.log(membership) //// Вивиде 1
console.log((membershipReverse)) /// Вивиде Premium

enum SocialMedia{
    FaceBook = "FaceBook",
    Instagram = "Instagram",
    YouTube = "YouTube"
}

const social = SocialMedia.FaceBook

console.log(social) /// виведе FaceBook
