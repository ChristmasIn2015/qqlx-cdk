SELECT
    "stream_user"."uuid32" AS "stream_user_uuid32",
    "stream_user"."id" AS "stream_user_id",
    "stream_user"."isDisabled" AS "stream_user_isDisabled",
    "stream_user"."timeCreate" AS "stream_user_timeCreate",
    "stream_user"."timeUpdate" AS "stream_user_timeUpdate",
    "joinWeChatList"."id" AS "joinWeChatList_id",
    "joinWeChatList"."isDisabled" AS "joinWeChatList_isDisabled",
    "joinWeChatList"."timeCreate" AS "joinWeChatList_timeCreate",
    "joinWeChatList"."timeUpdate" AS "joinWeChatList_timeUpdate",
    "joinWeChatList"."uuid32" AS "joinWeChatList_uuid32",
    "joinWeChatList"."unionId" AS "joinWeChatList_unionId",
    "joinWeChatList"."nickname" AS "joinWeChatList_nickname",
    "joinWeChatList"."avator" AS "joinWeChatList_avator",
    "joinTelecomList"."id" AS "joinTelecomList_id",
    "joinTelecomList"."isDisabled" AS "joinTelecomList_isDisabled",
    "joinTelecomList"."timeCreate" AS "joinTelecomList_timeCreate",
    "joinTelecomList"."timeUpdate" AS "joinTelecomList_timeUpdate",
    "joinTelecomList"."uuid32" AS "joinTelecomList_uuid32",
    "joinTelecomList"."phone" AS "joinTelecomList_phone",
    "joinEmailList"."id" AS "joinEmailList_id",
    "joinEmailList"."isDisabled" AS "joinEmailList_isDisabled",
    "joinEmailList"."timeCreate" AS "joinEmailList_timeCreate",
    "joinEmailList"."timeUpdate" AS "joinEmailList_timeUpdate",
    "joinEmailList"."uuid32" AS "joinEmailList_uuid32",
    "joinEmailList"."email" AS "joinEmailList_email"
FROM
    "stream_user" "stream_user"
    LEFT JOIN "stream_user_wechat" "joinWeChatList" ON "joinWeChatList"."uuid32" = "stream_user"."uuid32"
    LEFT JOIN "stream_user_telecom" "joinTelecomList" ON "joinTelecomList"."uuid32" = "stream_user"."uuid32"
    LEFT JOIN "stream_user_email" "joinEmailList" ON "joinEmailList"."uuid32" = "stream_user"."uuid32"
WHERE "stream_user"."uuid32" = 'dee5b4a9-81e7-4c47-b80f-a643d8a0036e'