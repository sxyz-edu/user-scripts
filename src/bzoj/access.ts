/**
 * Provide access to protected problems
 */

if (document.title === 'Please contact lydsy2012@163.com!' &&
  location.href.indexOf('problem.php') > -1) {
  location.href = location.href.replace('problem.php', 'show.php');
}

document.addEventListener('DOMContentLoaded', () => {
  if (location.href.indexOf('show.php') > -1) {
    const ele = document.getElementsByTagName('h2')[0];
    ele.innerHTML += '<span style="color:red;">[权限题]</span>';
  }
});
