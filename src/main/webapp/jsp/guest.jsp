<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<c:if test="${guest == null}">
	<a class='button button--primary navigation-bar__button navigation-bar--right' href='login'>Connection</a>
</c:if>
<c:if test="${guest != null}">
	<a class='button button--alert navigation-bar__button navigation-bar--right' href='logout'>Disconnection</a>
</c:if>