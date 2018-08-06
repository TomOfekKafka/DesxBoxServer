var Enum = require('enum');

module.exports.ResultEnum = new Enum({
    'Success': 0, 'UserAlreadyExists': 1, 'GeneralError': 2, 'SendingUserNotExist': 11, 'RemoveDirectionalRelationError': 12, 'CreateRelationError': 13,
    'CheckDirectionalRelationExistsError' : 14, 'AskFriendshipFromYourselfError' : 15, 'AlreadyFriends' : 16, 'AlreadyCloseFriends' : 17, 'AskFriendshipFromNonExistingUser' : 18,
    'ApproveJoiningRequestUserNotActivityOwner' : 19, 'ApproveJoiningRequestParticipantDoesNotExist' : 20, 'ApproveJoiningRequestActivityDoesNotExist' : 21, 'NotificationError' : 22, 'DbError' : 23,
    'ApproveJoiningRequestUserAlreadyAttends' : 24, 'RemoveParticipantActivityDoesNotExist' : 25, 'RemoveParticipantUserNotActivityOwner' : 26, 'RemoveParticipantParticipantNotAttending' : 27,
    'RemoveParticipantParticiapntDoesNotExist' : 28 ,'InsertChatMessageExceedsLimit' : 29, 'GetUserDetailUserNotFound' : 30, 'DeleteFriendUsersNotFriends' : 31, 'LoginUserUserDoesNotExist' : 32,
    'RecircleFriendUsersNotWideFriends' : 33, 'RecircleFriendUsersNotInnerFriends' : 34, 'UserIdNotExist' : 35, 'UserEncryptionInvalid' : 36, 'AddFriendFidNotExist' : 37, 'UpdateActivityActivityNotExist' : 38, 
    'GetActicvityDetailActivityNotFound' : 39, 'GetActivityDetailUserNotFound' : 40, 'GetActivityDetailActivityOwnerNotFound' : 41, 'ShareActivityActiviyNotFound' : 42,
    'ShareActivityUserNotFound' : 43, 'ApproveJoiningRequestUserDidNotAskToJoin' : 44, 'InsertChatToReceiverIdNotExist' : 45, 'InsertChatToMessageExceedsLimit' : 46});