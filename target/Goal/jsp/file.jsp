<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang='fr'>
	<head>
		<meta charset='utf-8' />
		<title>file - <c:out value="${file.title}"/></title>
		<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
		<link rel="stylesheet" type="text/css" href="css/style.css" />
		<script src='js/jquery.js'></script>
		<script src='js/bootstrap.js'></script>
	</head>
	<body>
		<header id='header'>
			<div class='navigation-bar navigation-bar--default'>
				<div class='navigation-bar__header'>
					<button class='button navigation-bar__toggle' type='button'><span class='bootypo bootypo--list'></span></button>
					<a class='navigation-bar__brand' href='home'>Goal</a>
				</div>
				<div class='navigation-bar__body'>
					<a class='button button--primary navigation-bar__button navigation-bar--right' href='connexion'>Connexion</a>
				</div>
			</div>
		</header>
		<section id='body'>
			<div class='grid'>
				<div class='row'>
					<div class='column small-12'>
						<h3><c:out value="${file.title}"/></h3>
						<p class='text-justify'>
							<c:out value="${file.content}"/>
						</p>
					</div>
				</div>
			</div>
		</section>
	</body>
</html>