require('require-yaml')

const { describe, it } = require('mocha')
const chai = require('chai')
chai.should()
const i18n = require('../lib/i18n')
const i18nVanilla = require('../data/locale.yml')

describe('i18n', () => {
  it('vanilla locale object has unobfuscated email addresses', () => {
    const channels = i18nVanilla.community.channels
    channels.security.should.include('security@voteit.se')
    channels.code_of_conduct.should.include('coc@voteit.se')
    channels.other.should.include('info@voteit.se')
  })

  it('processed locale object has obfuscated email addresses', () => {
    const channels = i18n.website['en-US'].community.channels
    channels.security.should.not.include('security@voteit.se')
    channels.code_of_conduct.should.not.include('coc@voteit.se')
    channels.other.should.not.include('info@voteit.se')
    channels.security.should.include('mailto:&#115;&#101;&#99;&#117;&#114;&#105;&#116;&#121;&#64;&#101;&#108;&#101;&#99;&#116;&#114;&#111;&#110;&#106;&#115;&#46;&#111;&#114;&#103;')
  })
})
