'use strict';
/* eslint-disable */
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {
        router,
        controller,
    } = app;
    //用户员登陆
    router.post('/user/login', controller.user.userLogin);
    //员工当天打卡情况
    router.get('/staff/getclock', controller.staffClock.getClock);
    //管理员得到所有人的打卡信息
    router.get('/staff/getallclock', controller.staffClock.getAllClock);
    //员工自己打卡信息
    router.get('/staff/getsomeclock', controller.staffClock.getSomeClock);

    //员工上下班打卡
    router.post('/staff/clockstart', controller.staffClock.insertClockStart)
    router.post('/staff/clockoff', controller.staffClock.updateClockEnd)

    //发表通告
    router.post('/noticepost', controller.notice.postNotice)
    router.get('/noticeget', controller.notice.getNotice)

    //请假
    router.post('/staff/addleaveissues', controller.leave.addLeave)
};