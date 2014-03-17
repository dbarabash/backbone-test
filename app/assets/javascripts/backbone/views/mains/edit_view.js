BackboneTest.Views.Mains ||= {}

class BackboneTest.Views.Mains.EditView extends Backbone.View
  template : JST["backbone/templates/mains/edit"]

  events :
    "submit #edit-main" : "update"

  update : (e) ->
    e.preventDefault()
    e.stopPropagation()

    @model.save(null,
      success : (main) =>
        @model = main
        window.location.hash = "/#{@model.id}"
    )

  render : ->
    $(@el).html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this
