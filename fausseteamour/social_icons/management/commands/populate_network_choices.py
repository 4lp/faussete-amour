from django.core.management.base import BaseCommand
from social_icons.models import NetworkChoices

class Command(BaseCommand):
    help = "Populates social media icon choices"
    def handle(self, *args, **options):
        def populate_db():
            NetworkChoices(name="Facebook", glyphname="facebook").save()
            NetworkChoices(name="Twitter", glyphname="twitter").save()
            NetworkChoices(name="Google Plus", glyphname="google-plus").save()
            NetworkChoices(name="Github", glyphname="github").save()
            NetworkChoices(name="Pintrest", glyphname="pintrest").save()
            NetworkChoices(name="LinkedIn", glyphname="linkedin").save()
            NetworkChoices(name="Flickr", glyphname="flickr").save()
            NetworkChoices(name="Instagram", glyphname="instagram").save()
            NetworkChoices(name="Vimeo", glyphname="vimeo-square").save()
            NetworkChoices(name="Stack Overflow", glyphname="stack-overflow").save()
            NetworkChoices(name="Dropbox", glyphname="dropbox").save()
            NetworkChoices(name="Tumblr", glyphname="tumblr").save()
            NetworkChoices(name="Dribble", glyphname="dribble").save()
            NetworkChoices(name="Skype", glyphname="skype").save()
            NetworkChoices(name="Youtube", glyphname="youtube").save()
            NetworkChoices(name="Xing", glyphname="xing").save()
            NetworkChoices(name="RSS", glyphname="rss").save()
            NetworkChoices(name="Foursquare", glyphname="foursquare").save()
            NetworkChoices(name="Youtube", glyphname="youtube-play").save()
            NetworkChoices(name="Twitch", glyphname="twitch").save()
            NetworkChoices(name="Email", glyphname="envelope").save()
            NetworkChoices(name="Patreon", glyphname="heart").save()


        populate_db()