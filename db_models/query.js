/**
 * Created by Виталий on 24.09.2016.
 */
// Добавить студента (Логин, пароль, взвод, курс)

module.exports.addStudent = function(permissions, profile_st, groups) {
    var addStudent = function(aData, callback, error) {
        permissions.addData({login: aData.login, password: aData.password, permission: 'student'}, function(permission) {
            console.log('1');
            groups.addData({course: aData.course, squad: aData.squad}, function (group) {
                console.log('2');
                profile_st.addData({student_id: permission._id, group_id: group._id}, function(result) {
                    console.log('3');
                    return callback(result);
                }, error);
            }, error);
        }, error);
    };

    return addStudent;
}