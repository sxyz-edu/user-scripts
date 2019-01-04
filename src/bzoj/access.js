/**
 * Provide access to protected problems
 */

if (location.href.indexOf('problem.php') > -1) {
  location.href = location.href.replace('problem.php', 'show.php');
}
