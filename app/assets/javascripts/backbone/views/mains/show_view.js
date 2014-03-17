BackboneTest.Views.Mains ||= {}

class BackboneTest.Views.Mains.ShowView extends Backbone.View
  template: JST["backbone/templates/mains/show"]

  render: ->
    $(@el).html(@template(@model.toJSON() ))
    return this
