BackboneTest.Views.Mains ||= {}

class BackboneTest.Views.Mains.NewView extends Backbone.View
  template: JST["backbone/templates/mains/new"]

  events:
    "submit #new-main": "save"

  constructor: (options) ->
    super(options)
    @model = new @collection.model()

    @model.bind("change:errors", () =>
      this.render()
    )

  save: (e) ->
    e.preventDefault()
    e.stopPropagation()

    @model.unset("errors")

    @collection.create(@model.toJSON(),
      success: (main) =>
        @model = main
        window.location.hash = "/#{@model.id}"

      error: (main, jqXHR) =>
        @model.set({errors: $.parseJSON(jqXHR.responseText)})
    )

  render: ->
    $(@el).html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this
