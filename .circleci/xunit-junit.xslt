<?xml version="1.0" encoding="UTF-8" ?>
<!-- Original: https://github.com/gabrielweyer/xunit-to-junit -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output
    method="xml"
    encoding="UTF-8"
    byte-order-mark="no"
    indent="yes"
    omit-xml-declaration="no"
    cdata-section-elements="skipped failure "/>
  <xsl:template match="/">
    <testsuites>
      <xsl:for-each select="//assembly">
        <testsuite>
          <xsl:attribute name="name">
            <xsl:value-of select="@name"/>
          </xsl:attribute>
          <xsl:attribute name="tests">
            <xsl:value-of select="@total"/>
          </xsl:attribute>
          <xsl:attribute name="failures">
            <xsl:value-of select="@failed"/>
          </xsl:attribute>
          <xsl:attribute name="skipped">
            <xsl:value-of select="@skipped"/>
          </xsl:attribute>
          <xsl:attribute name="errors">
            <xsl:value-of select="@errors"/>
          </xsl:attribute>
          <xsl:attribute name="time">
            <xsl:value-of select="@time"/>
          </xsl:attribute>
          <xsl:attribute name="timestamp">
            <xsl:value-of
              select="@run-date"
            />T<xsl:value-of select="@run-time"/>
          </xsl:attribute>
          <xsl:for-each select="collection/test">
            <testcase>
              <xsl:attribute name="name">
                <xsl:value-of select="@name"/>
              </xsl:attribute>
              <xsl:attribute name="classname">
                <xsl:value-of select="@type"/>
              </xsl:attribute>
              <xsl:attribute name="time">
                <xsl:value-of select="@time"/>
              </xsl:attribute>
              <xsl:if test="@result='Skip'">
                <skipped><xsl:value-of select="reason"/></skipped>
              </xsl:if>
              <xsl:if test="@result='Fail'">
                <failure>
                  <xsl:attribute name="type">
                    <xsl:value-of select="failure/@exception-type"/>
                  </xsl:attribute>
                  <xsl:attribute name="message">
                    <xsl:value-of select="failure/message"/>
                  </xsl:attribute>
                  <xsl:value-of select="failure/stack-trace"/>
                </failure>
              </xsl:if>
            </testcase>
          </xsl:for-each>
        </testsuite>
      </xsl:for-each>
    </testsuites>
  </xsl:template>
</xsl:stylesheet>
